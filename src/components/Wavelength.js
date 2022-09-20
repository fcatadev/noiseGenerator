export class WaveLength {
draw(f){
    console.log(f);
     // Init SineWaveCanvas and SineWaveForm
     new sineWaveForm(new sineWaveCanvas(document.body),f);
}

}


export class SineWaveForm {
    constructor(canvas,f) {

        var self = this;

        /**
         * Settings
         */
        this.settings = {
            'amplitude': 90,
            'frequency': f,
            'periods': 0,
            'input_width': 70,
            'input_margin': 6,
            'form_margin': 30
        };

        /**
         * Language
         */
        this.language = {
            'amplitude': 'Amplitude',
            'frequency': 'Frequency',
            'periods': 'Periods (max)',
            'submit': 'To plot'
        };

        /**
         * Objects
         */
        this.objects = {};

        /**
         * Form
         */
        this.form = {};

        /**
         * Canvas
         */
        this.canvas = canvas;

        /**
         * Init
         */
        this.init = function () {
            // create form
            self.createForm();

            // form on submit
            self.formOnSubmit();

            // to graph
            self.toGraph();
        };

        /**
         * Create form
         */
        this.createForm = function () {
            // create form element
            self.form = document.createElement('form');
            self.form.style.marginBottom = self.settings.form_margin + 'px';

            // create labels and inputs. And append
            var values = ['amplitude', 'frequency', 'periods'];
            for (var key in values) {
                // init values
                var value = values[key];
                var label = 'l_' + value;
                var input = 'i_' + value;

                // create label
                // eval("var " + label + " = document.createElement('label')");
                // eval(label + ".textContent = self.language[value] + ':'");

                // create input
                self.objects[input] = document.createElement('input');
                self.objects[input].setAttribute('type', 'text');
                self.objects[input].setAttribute('name', value);
                self.objects[input].setAttribute('value', self.settings[value]);
                self.objects[input].setAttribute('autocomplete', 'off');
                self.objects[input].style.width = self.settings.input_width + 'px';
                self.objects[input].style.marginLeft = self.settings.input_margin + 'px';
                self.objects[input].style.marginRight = self.settings.input_margin + 'px';
                // eval(label + ".appendChild(self.objects[input])");

                // append element
                // eval("self.form.appendChild(" + label + ")");
            }

            // create input submit
            var s = document.createElement('input');
            s.setAttribute('type', 'submit');
            s.setAttribute('value', self.language.submit);
            self.form.appendChild(s);

            // insert form before canvas element
            // canvas.object_to.insertBefore(self.form, self.canvas.canvas);
        };

        /**
         * Form on submit
         */
        this.formOnSubmit = function () {
            self.form.onsubmit = function () {
                self.toGraph();
                return false;
            };
        };

        /**
         * To graph
         */
        this.toGraph = function () {
            self.canvas.stroke(self.objects.i_amplitude.value, self.objects.i_frequency.value, self.objects.i_periods.value);
        };

        // init
        this.init();
    }

};


export class SineWaveCanvas {
    constructor(object_to) {

        var self = this;

        /**
         * Settings
         */
        this.settings = {
            // canvas
            'canvas_width': 2000,
            'canvas_height': 300,
            'canvas_border': '1px solid #000',
            // abscissa
            'abscissa_width': 2,
            'abscissa_color': '#000',
            // sine wave
            'sine_wave_width': 1,
            'sine_wave_color': '#f00'
        };

        /**
         * Values
         * @type {Object}
         */
        this.values = {};

        /**
         * Context canvas
         * @type {Object}
         */
        this.canvas = {};

        /**
         * Context canvas
         * @type {Object}
         */
        this.context = {};

        /**
         * Object to
         */
        this.object_to = object_to;

        /**
         * Init
         */
        this.init = function () {
            // Create canvas
            self.createCanvas();
        };

        /**
         * Create canvas
         */
        this.createCanvas = function () {
            // create canvas element
            self.canvas = document.getElementById('sinewave');
            self.canvas.width = self.settings.canvas_width;
            self.canvas.height = self.settings.canvas_height;
            self.canvas.style.border = self.settings.canvas_border;

            // get context 2d
            self.context = self.canvas.getContext('2d');

            // set begin coordinates
            self.values.x_begin = 0;
            self.values.y_begin = self.canvas.height / 2;

        };

        /**
         * Clear canvas
         */
        this.clearCanvas = function () {
            self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
        };

        /**
         * Stroke Abscissa Line
         */
        this.strokeAbscissaLine = function () {
            // stroke line x (abscissa)
            self.context.beginPath();
            self.context.moveTo(self.values.x_begin, self.values.y_begin);
            self.context.lineTo(self.canvas.width, self.values.y_begin);
            self.context.lineWidth = self.settings.abscissa_width;
            self.context.strokeStyle = self.settings.abscissa_color;
            self.context.stroke();
        };

        /**
         * Stroke
         */
        this.stroke = function (amplitude, frequency, periods) {
            // Clear canvas
            self.clearCanvas();

            // Stroke Abscissa Line
            self.strokeAbscissaLine();

            // Stroke Sine Wave
            self.strokeSine(amplitude, frequency, periods);
        };

        /**
         * Stroke Sine Wave
         */
        this.strokeSine = function (amplitude, frequency, periods) {
            // stroke Sine wave
            self.context.beginPath();
            self.context.lineWidth = self.settings.sine_wave_width;
            self.context.strokeStyle = self.settings.sine_wave_color;

            // begin coordinates
            var x = self.values.x_begin;
            var y = self.values.y_begin;
            self.context.moveTo(x, y);

            // periods max
            var periods_max = periods * 2;

            // stroke by line abscissa (horizontal)
            var rad = 0, i = 0, limit = 0;
            while (x < self.canvas.width && !limit) {

                // delta between values radians
                rad += frequency * 0.001; // increases the frequency

                // limit radians on the max periods
                // that the line wouldn't leave further the period
                if (periods_max && rad > periods_max * Math.PI) {
                    rad = periods_max * Math.PI;
                    limit = 1;
                }

                // coordinate by line abscissa (horizontal)
                x++;

                // coordinate sin(rad) by line ordinate (vertical)
                i = parseFloat(Math.sin(rad).toFixed(6));

                // create line (minus because the inversion in the canvas)
                self.context.lineTo(x, y - i * amplitude);
            }
            self.context.stroke();
        };

        this.init();
    }

};

var sineWaveForm=SineWaveForm;
var sineWaveCanvas=SineWaveCanvas;
var waveLength = new WaveLength();

export { waveLength };