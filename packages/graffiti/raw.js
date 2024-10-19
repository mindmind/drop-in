const css = "/* Typeography */\n:root {\n\t--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial,\n\t\tsans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\n\n\t--min-vw: 360;\n\t--max-vw: 800;\n\n\t/* Deprecated\t- use --fs: 1 instead */\n\t/* Fluid Type */\n\t--fs-xxxs: clamp(0.45rem, 0.305882vi + 0.37rem, 0.58rem);\n\t--fs-xxs: clamp(0.56rem, 0.376471vi + 0.47rem, 0.72rem);\n\t--fs-xs: clamp(0.7rem, 0.470588vi + 0.58rem, 0.9rem);\n\t--fs-base: clamp(0.88rem, 0.588235vi + 0.73rem, 1.13rem);\n\t--fs-s: clamp(1.09rem, 0.752941vi + 0.9rem, 1.41rem);\n\t--fs-m: clamp(1.37rem, 0.917647vi + 1.14rem, 1.76rem);\n\t--fs-l: clamp(1.71rem, 1.152941vi + 1.42rem, 2.2rem);\n\t--fs-xl: clamp(2.14rem, 1.435294vi + 1.78rem, 2.75rem);\n\t--fs-xxl: clamp(2.67rem, 1.788235vi + 2.22rem, 3.43rem);\n\t--fs-xxxl: clamp(3.34rem, 2.235294vi + 2.78rem, 4.29rem);\n\t--fs-xxxxl: clamp(4.17rem, 2.8vi + 3.47rem, 5.36rem);\n\t/* END Deprecated Fluid Type */\n\n\t--line-height: calc(2px + 2ex + 2px);\n\n\t/* Vertical Spacing */\n\t--vs-s: 0.5rem;\n\t--vs-base: 1rem;\n\t--vs-m: 1.5rem;\n\t--vs-l: 2rem;\n\n\t/* Border Radius */\n\t--rad-xs: 2px;\n\t--rad-s: 4px;\n\t--rad-m: 8px;\n\t--rad-l: 16px;\n\n\t/* Padding */\n\t--pad-xs: 2px;\n\t--pad-s: 6px;\n\t--pad-m: 12px;\n\t--pad-l: 25px;\n\n\t/* Shadow */\n\t--shadow-color: 0deg 0% 0%;\n\t--bs-s: 0.5px 0.8px 1.1px hsl(var(--shadow-color) / 0.3),\n\t\t0.8px 1.3px 1.7px -1.2px hsl(var(--shadow-color) / 0.3),\n\t\t1.9px 3.1px 4.1px -2.5px hsl(var(--shadow-color) / 0.3);\n\t--bs-m: 0.5px 0.8px 1.1px hsl(var(--shadow-color) / 0.32),\n\t\t1.6px 2.6px 3.4px -0.8px hsl(var(--shadow-color) / 0.32),\n\t\t3.9px 6.4px 8.4px -1.7px hsl(var(--shadow-color) / 0.32),\n\t\t9.6px 15.5px 20.5px -2.5px hsl(var(--shadow-color) / 0.32);\n\t--bs-l: 0.5px 0.8px 1.1px hsl(var(--shadow-color) / 0.3),\n\t\t2.7px 4.4px 5.8px -0.4px hsl(var(--shadow-color) / 0.3),\n\t\t4.9px 8px 10.6px -0.7px hsl(var(--shadow-color) / 0.3),\n\t\t8.1px 13.1px 17.3px -1.1px hsl(var(--shadow-color) / 0.3),\n\t\t12.9px 20.9px 27.6px -1.4px hsl(var(--shadow-color) / 0.3),\n\t\t20.1px 32.7px 43.2px -1.8px hsl(var(--shadow-color) / 0.3),\n\t\t30.6px 49.7px 65.7px -2.1px hsl(var(--shadow-color) / 0.3),\n\t\t45px 73.1px 96.6px -2.5px hsl(var(--shadow-color) / 0.3);\n\n\t/* Default Palette */\n\t--yellow: #ffd817;\n\t--orange: #ff9e02;\n\t--red: #ff5a00;\n\t--pink: #ff0084;\n\t--teal: #a0dcc8;\n\t--blue: #0001fb;\n\n\t--fg: light-dark(#000, #fff);\n\t--bg: light-dark(#fff, #000);\n\n\t--tint-or-shade: color-mix(in oklab, var(--fg), transparent 95%);\n\t--tint-or-shade-harder: color-mix(in oklab, var(--fg), transparent 90%);\n\n\t/* Fluid Type */\n\t--font-size-min: 16;\n\t--font-size-max: 20;\n\t--font-ratio-min: 1.25;\n\t--font-ratio-max: 1.25;\n\t--font-width-min: 320;\n\t--font-width-max: 1500;\n\n\tcolor-scheme: light dark;\n}\n\nhtml {\n\tbox-sizing: border-box;\n}\n\nhtml,\nbody,\nbody > .body-fill {\n\theight: 100%;\n\tmargin: 0;\n}\n\nbody > .body-fill {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\nmain {\n\tflex: 1;\n}\n\nheader,\nmain,\nfooter {\n\twidth: 100%;\n}\n\n*,\n*::before,\n*::after {\n\tbox-sizing: inherit;\n}\n\nbody {\n\tfont-family: var(--font-sans);\n\tline-height: 1.5;\n\tmargin: 0;\n\tmin-height: 100vh;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nli,\n.fluid,\ntextarea,\ninput,\nselect,\nbutton,\nth,\ntd {\n\t--fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--fl, 0)));\n\t--fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--fl, 0)));\n\t--fluid-preferred: calc(\n\t\t(var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min))\n\t);\n\t--fluid-type: clamp(\n\t\t(var(--fluid-min) / 16) * 1rem,\n\t\t((var(--fluid-min) / 16) * 1rem) -\n\t\t\t(((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +\n\t\t\t(var(--fluid-preferred) * var(--variable-unit, 100vi)),\n\t\t(var(--fluid-max) / 16) * 1rem\n\t);\n\tfont-size: var(--fluid-type);\n\tmargin-block: 0 var(--vs-base);\n}\n\n/* This makes containers, with container queries use a cqi unit instead of vi */\n/* FC Fluid Container */\n.fluid-text-container,\n.fc {\n\tcontainer-type: inline-size;\n\t--variable-unit: 100cqi;\n}\nh1,\n.h1 {\n\tmargin-block: 0 var(--vs-base);\n\t--fl: 5;\n}\nh2,\n.h2 {\n\t--fl: 4;\n}\nh3,\n.h3 {\n\t--fl: 3;\n}\nh4,\n.h4 {\n\t--fl: 2;\n}\nh5,\n.h5 {\n\t--fl: 1;\n}\nh6,\n.h6 {\n\t--fl: 0;\n}\np,\nli,\nbody,\ninput,\ntextarea,\nselect {\n\t--fl: 0;\n}\n.fs-xs {\n\t--fl: -1;\n}\n.fs-base {\n\t--fl: 0;\n}\n.fs-s {\n\t--fl: 1;\n}\n.fs-m {\n\t--fl: 2;\n}\n.fs-l {\n\t--fl: 3;\n}\n.fs-xl {\n\t--fl: 4;\n}\n.fs-xxl {\n\t--fl: 5;\n}\n.fs-xxxl {\n\t--fl: 6;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n\tfont: inherit;\n\tmargin: 0;\n}\n\nbutton,\n.button {\n\tcursor: pointer;\n\tbackground: var(--bg);\n\tcolor: var(--fg);\n\tborder: solid 1px var(--tint-or-shade);\n\tborder-radius: var(--rad-s);\n\tpadding: var(--pad-s) var(--pad-l);\n}\n\n/* UTILITIES */\n\n.readable {\n\tmax-width: 900px;\n\twidth: 100%;\n}\n\n.flex {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.grid {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n\tgrid-gap: 20px;\n}\n\n.visually-hidden {\n\tposition: absolute;\n\toverflow: hidden;\n\tclip: rect(0px, 0px, 0px, 0px);\n\theight: 1px;\n\twidth: 1px;\n\tmargin: -1px;\n\tpadding: 0px;\n\tborder: 0px;\n}\n\n.no-list {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tli {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n}\n\n.row {\n\tmargin-block: var(--vs-l);\n}\n/* END UTILITIES */\n\n/* LAYOUT */\n.layout {\n\tdisplay: grid;\n\talign-content: start;\n\tgrid-template-rows: auto;\n\t--max-col-size: 100px;\n\t--min-col-size: 50px;\n\t--gcs: 12;\n\t--gg: 2.5;\n\t--gc: minmax(var(--min-col-size), var(--max-col-size));\n\t--g-boundary: minmax(calc(var(--gg) * 1%), 1fr);\n\t--g-gutter-width: calc(var(--gg) * 1%);\n\n\tgrid-template-columns:\n\t\t[start gutter] var(--g-boundary) [content]\n\t\trepeat(calc(var(--gcs) - 1), [col-start] var(--gc) [col-end gutter] var(--g-gutter-width))\n\t\t[last-col-start col-start] var(--gc) [col-end content-end gutter] var(--g-boundary)\n\t\t[end];\n\t@media (width < 1000px) {\n\t\t--gcs: 8;\n\t}\n\t@media (width < 500px) {\n\t\t--gcs: 4;\n\t}\n}\n\n.layout > * {\n\tgrid-column: content / content-end;\n}\n\n.layout .sub {\n\tgrid-template-columns: subgrid;\n\tdisplay: grid;\n}\n\n.layout .col {\n\tgrid-column: col-start round(down, mod(calc(var(--start) - 1), var(--gcs)) + 1) / span\n\t\tvar(--span, 'end');\n}\n/* Sidebar class (1/4 width) */\n.layout .sidebar {\n\t@media (width < 700px) {\n\t\tgrid-column: content / span 3;\n\t}\n\t@media (width < 500px) {\n\t\tgrid-column: content / content-end;\n\t}\n\tgrid-column: content / span 3;\n}\n\n/* Main content area class */\n.layout .main {\n\tgrid-column: col-start 3 / content-end;\n\t@media (width < 500px) {\n\t\tgrid-column: content / content-end;\n\t}\n}\n\n/* Sidebar class (1/4 width) */\n.layout .invert-sidebar {\n\t@media (width < 1000px) {\n\t\t--start: 7;\n\t\t--span: 3;\n\t}\n\t@media (width < 500px) {\n\t\tgrid-column: content / content-end;\n\t}\n\n\t--start: 10;\n\t--span: 5;\n}\n\n/* TODO this is being overridden by specificity */\n/* Main content area class */\n.layout .invert-main {\n\t@media (width < 1000px) {\n\t\tgrid-column: col-start / span 11;\n\t}\n\t@media (width < 500px) {\n\t\tgrid-column: content / content-end;\n\t}\n\tgrid-column: col-start / span 17;\n}\n\n.layout .full {\n\twidth: 100%;\n\tgrid-column: start / end;\n}\n\n.c-full {\n\t--start: 1;\n\t--span: calc((var(--gcs) * 2 - 1));\n}\n\n.c-quarter {\n\t--start: 1; /* Always starts at column 2 */\n\t--span: calc((var(--gcs) / 2) - 1); /* Half of the total columns, excluding the first gutter */\n}\n\n.c-quarter:nth-child(2 of .c-quarter) {\n\t--start: calc((var(--gcs) / 4) + 1);\n}\n\n.c-quarter:nth-child(3 of .c-quarter) {\n\t--start: calc((var(--gcs) / 4) * 2 + 1);\n}\n\n.c-quarter:nth-child(4 of .c-quarter) {\n\t--start: calc(((var(--gcs) / 4) * 3) + 1);\n}\n\n.c-half {\n\t--start: 1;\n\t--span: calc((var(--gcs) - 1)); /* Half of the total columns, excluding the first gutter */\n}\n.c-half:nth-child(2 of .c-half) {\n\t--start: calc(\n\t\t(var(--gcs) / 2) + 1\n\t); /* Starts after the first .c-half including its span and the gutter */\n}\n\n:where(h1, h2, h3, h4, h5, h6) {\n\tview-transition-name: var(--transition-name);\n}\n/* END LAYOUT */\n\n/* @drop-in/decks Specific Styles */\n\n/* Accordion */\n.di-accordion {\n\tmargin-block: 0 var(--vs-base);\n\tsummary {\n\t\tfont-size: var(--base);\n\t\tpadding: 2rem 1rem;\n\t\tborder-block-end: solid 1px var(--tint-or-shade);\n\t}\n\tborder-block-end: solid 1px var(--tint-or-shade);\n}\n\n/* Share */\n.di-dialog {\n\tborder-radius: var(--rad-m);\n\tmax-width: 60ch;\n\tborder: none;\n\tpadding: var(--pad-m);\n\tposition: relative;\n\tbox-shadow: var(--bs-l);\n\t&::backdrop {\n\t\tbackground-color: rgb(0 0 0 / 0.5);\n\t\tbackdrop-filter: blur(5px);\n\t}\n\t> *:first-child {\n\t\tmargin-top: 0;\n\t}\n\t.share-window {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t}\n}\n.di-drawer {\n\tborder: none;\n\tborder-radius: var(--rad-m);\n\tpadding: var(--pad-m);\n\tbox-shadow: var(--bs-l);\n\t&::backdrop {\n\t\tbackground-color: rgb(0 0 0 / 0.5);\n\t\tbackdrop-filter: blur(5px);\n\t}\n}\n\n.di-drawer-close-button {\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n}\n\n.di-dialog-close {\n\tposition: absolute;\n\tborder: none;\n\tright: 10px;\n\ttop: 10px;\n\tline-height: var(--fs-s);\n\tfont-size: var(--fs-s);\n\tcursor: pointer;\n}\n\n/* Menu */\n.di-menu {\n\tbackground: var(--bg);\n\tbox-shadow: var(--bs-m);\n\tborder-radius: var(--rad-m);\n\tpadding: var(--pad-s);\n\tflex-direction: column;\n\tborder: solid 1px var(--tint);\n\twidth: 150px;\n\tz-index: 10;\n\t.di-menu-inner {\n\t\tgap: 10px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\tbutton,\n\ta {\n\t\tline-height: 1;\n\t\tbackground: transparent;\n\t\tcolor: var(--fg);\n\t\tgap: 10px;\n\t\tpadding: var(--pad-s);\n\t\talign-items: center;\n\t\tborder-radius: var(--rad-s);\n\t\tborder: none;\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\t&:hover,\n\t\t&:active {\n\t\t\tbackground: var(--tint-or-shade);\n\t\t}\n\t}\n}\n\n.di-toast-slice {\n\tbackground: var(--bg);\n\tbox-shadow: var(--bs-m);\n\tborder-radius: var(--rad-s);\n\tpadding: var(--pad-m) var(--pad-l);\n\tflex-direction: column;\n\tborder: solid 1px var(--tint);\n\tz-index: 10;\n\toverflow: hidden;\n\tposition: relative;\n\t.progress {\n\t\t--info: var(--blue);\n\t\t--success: var(--green);\n\t\t--warning: var(--yellow);\n\t\t--error: var(--red);\n\t}\n}\n";
export default css;