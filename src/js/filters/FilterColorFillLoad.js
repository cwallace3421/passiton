function FilterColorFillLoad() {

    Phaser.Filter.ColorFill = function (game) {

        Phaser.Filter.call(this, game);

        this.uniforms.u_color = { type: '3f', value: { x: 0.0, y: 0.0, z: 0.0 } };

        this.fragmentSrc = [
            "precision mediump float;",
            "precision mediump int;",

            "uniform vec3 u_color;",
            "uniform sampler2D uSampler;",
            "varying vec2 vTextureCoord;",

            "varying vec4 vColor;",

            "void main() {",
                "gl_FragColor = texture2D(uSampler, vTextureCoord);",
                "if (gl_FragColor.a > 0.0) {",
                    "gl_FragColor.r = u_color.x;",
                    "gl_FragColor.g = u_color.y;",
                    "gl_FragColor.b = u_color.z;",
                    "gl_FragColor.a = 1.0;",
                "}",
            "}"
        ];

    };

    Phaser.Filter.ColorFill.prototype = Object.create(Phaser.Filter.prototype);
    Phaser.Filter.ColorFill.prototype.constructor = Phaser.Filter.ColorFill;

    Phaser.Filter.ColorFill.prototype.init = function (width, height, color) {
        this.setResolution(width, height);
        if (color) {
            this.uniforms.u_color.value = {
                x: color.r / 255,
                y: color.g / 255,
                z: color.b / 255
            };
        }
    };

    Object.defineProperty(Phaser.Filter.ColorFill.prototype, 'u_color', {
        get: function() {
            return this.uniforms.u_color.value;
        },

        set: function(value) {
            this.uniforms.u_color.value = {
                x: value.r / 255,
                y: value.g / 255,
                z: value.b / 255
            };
        }
    });

}

module.exports = FilterColorFillLoad;