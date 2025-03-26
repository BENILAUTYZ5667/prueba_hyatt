"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [613], {
        26999: (t, e, s) => {
            s.d(e, {
                g: () => r
            });
            var a = s(63808);

            function r() {
                let t = document.querySelector("[data-bellhop]");
                if (void 0 != t && t.href) {
                    var e;
                    let s = new URL(t.href).pathname.match(/([a-z0-9-_]*)*\.min\.css/);
                    if (e = s[1], a.t.includes(e)) return s[1]
                }
                return "world"
            }
        },
        36598: (t, e, s) => {
            s.d(e, {
                b: () => a
            });
            let a = {
                ALILA: "Alila",
                ALUA: "Alua Hotel & Resorts",
                ANDAZ: "Andaz",
                BREATHLESS: "Breathless Resorts & Spas",
                CAPTION: "Caption by Hyatt",
                CENTRIC: "Hyatt Centric",
                DESTINATION: "Destination by Hyatt",
                DREAM: "Dream Hotels",
                DREAMS: "Dreams Resorts & Spas",
                GRAND: "Grand Hyatt",
                HOUSE: "Hyatt House",
                HYATT: "Hyatt Hotels",
                IMPRESSION: "Impression by Secrets",
                JDV: "JDV by Hyatt",
                ME_AND_ALL: "me and all hotels",
                MIRAVAL: "Miraval Resorts",
                MR_MRS_SMITH: "Mr & Mrs Smith",
                PARK: "Park Hyatt",
                PLACE: "Hyatt Place",
                REGENCY: "Hyatt Regency",
                SECRETS: "Secrets Resorts & Spas",
                SLH: "Small Luxury Hotels of the World",
                STUDIOS: "Hyatt Studios",
                SUNSCAPE: "Sunscape Resorts & Spas",
                THOMPSON: "Thompson Hotels",
                UNBOUND: "The Unbound Collection",
                URCOVE: "UrCove by Hyatt",
                VACATION: "Hyatt Vacation Club",
                VIVID: "Vivid Resorts",
                WILD_DUNES: "Wild Dunes Resort",
                WORLD: "World of Hyatt",
                ZILARA: "Hyatt Zilara",
                ZIVA: "Hyatt Ziva",
                ZOETRY: "Zoetry Wellness & Spa Resorts"
            }
        },
        70613: (t, e, s) => {
            s.r(e), s.d(e, {
                be_logo_header: () => n
            });
            var a = s(7189),
                r = s(26999),
                o = s(80353);
            s(63808);
            var l = s(13460),
                i = s(36598);
            let n = class {
                constructor(t) {
                    (0, a.r)(this, t), this.size = "lg", this.country = "US", this.reverse = !1, this.theme = (0, r.g)()
                }
                getLegalMark(t) {
                    return o.n.includes(t) ? "cn" : o.r.includes(t) ? "us" : "eu"
                }
                render() {
                    let t = this.reverse ? "on-dark" : "on-light";
                    return (0, a.h)("img", {
                        key: "2b39192a66c0ee7d4e0c904aac670aff737a129d",
                        src: `${l.I}/logos/${this.theme}/header-${this.size}-${this.getLegalMark(this.country)}-${t}.svg`,
                        alt: i.b[(0, o.g)(this.theme)]
                    })
                }
            };
            n.style = ":host{height:64px}:host img{height:64px}"
        },
        80353: (t, e, s) => {
            s.d(e, {
                g: () => o,
                n: () => r,
                r: () => a
            });
            let a = ["AW", "BS", "CA", "CL", "CR", "GT", "MX", "NI", "US"],
                r = ["CN", "MO", "TW"];

            function o(t) {
                return t.split("-")[0].replace("_", "").toUpperCase()
            }
        }
    }
]);
