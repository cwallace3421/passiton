function FilterOutlineLoad() {
    Phaser.Filter.TestFilter = function (game) {

        Phaser.Filter.call(this, game);

        this.uniforms.u_viewportInverse = { type: '2f', value: { x: 0.0, y: 0.0 } };
        this.uniforms.u_color = { type: '3f', value: { x: 0.0, y: 0.0, z: 0.0 } };
        this.uniforms.border_alpha = { type: '1f', value: 0.5 };
        // this.uniforms.u_step = { type: '1f', value: 0.5 };
        // this.uniforms.u_offset = { type: '1f', value: 2 };

        //  The fragment shader source
        this.fragmentSrc = [
            "precision mediump float;",
            "precision mediump int;",

            "uniform sampler2D u_texture;",

            "uniform vec2 u_viewportInverse;",

            "uniform vec3 u_color;",

            "varying vec4 v_color;",
            "varying vec2 vTextureCoord;",

            "uniform float border_alpha;",

            "#define u_step 1.0",
            "#define u_offset 2.0",

            "void main() {",
                "vec2 T = vTextureCoord.xy;",

                "float alpha = 0.0;",
                "bool allin = true;",
                "for( float ix = -u_offset; ix < u_offset; ix += u_step ) {",
                    "for( float iy = -u_offset; iy < u_offset; iy += u_step ) {",
                        "float newAlpha = texture2D(u_texture, T + vec2(ix, iy) * u_viewportInverse).a;",
                        "allin = allin && newAlpha > border_alpha;",
                        "if (newAlpha > border_alpha && newAlpha >= alpha) {",
                            "alpha = newAlpha;",
                        "}",
                    "}",
                "}",
                "if (allin) {",
                    "alpha = 0.0;",
                "}",

                "gl_FragColor = vec4(u_color,alpha);",
            "}"
        ];

    };

    Phaser.Filter.TestFilter.prototype = Object.create(Phaser.Filter.prototype);
    Phaser.Filter.TestFilter.prototype.constructor = Phaser.Filter.TestFilter;

    Phaser.Filter.TestFilter.prototype.init = function (width, height, color, inverse) {
        this.setResolution(width, height);
        // this.uniforms.u_color.value = { x: color.r / 255, y: color.g / 255, z: color.b / 255 };
        // this.uniforms.border_alpha.value = color.a / 255;
        // this.uniforms.u_viewportInverse = { x: inverse.x, y: inverse.y };
        // this.uniforms.u_offset.value = thickness;
        // this.uniforms.u_step.value = step;
    };

    Object.defineProperty(Phaser.Filter.TestFilter.prototype, 'u_color', {
        get: function() {
            return this.uniforms.u_color.value;
        },

        set: function(value) {
            this.uniforms.u_color.value = {x: value.r / 255, y: value.b / 255, z: value.b / 255};
        }
    });

    Object.defineProperty(Phaser.Filter.TestFilter.prototype, 'border_alpha', {
        get: function() {
            return this.uniforms.border_alpha.value;
        },

        set: function(value) {
            this.uniforms.border_alpha.value = value;
        }
    });

    Object.defineProperty(Phaser.Filter.TestFilter.prototype, 'u_viewportInverse', {
        get: function() {
            return this.uniforms.u_viewportInverse.value;
        },

        set: function(value) {
            this.uniforms.u_viewportInverse.value = {x: value.x, y: value.y};
        }
    });
}

module.exports = FilterOutlineLoad;