(this.webpackJsonpcalculator = this.webpackJsonpcalculator || []).push([
  [0],
  {
    23: function (e, t, c) {},
    25: function (e, t, c) {
      "use strict";
      c.r(t);
      var l = c(1),
        n = c(5),
        s = c(10),
        i = c.n(s),
        a = c(14),
        h = c(11),
        d = c(12),
        j = c(16),
        r = c(15);
      function b(e) {
        return Object(l.jsx)("div", {
          className: "button",
          onClick: function () {
            return e.handleClick(e.children);
          },
          children: e.children,
        });
      }
      var u = c(27),
        k =
          (c(23),
          (function (e) {
            Object(j.a)(c, e);
            var t = Object(r.a)(c);
            function c() {
              var e;
              return (
                Object(h.a)(this, c),
                ((e = t.call(this)).handleClick = function (t) {
                  "=" === t
                    ? e.setState({ input: Object(u.a)(e.state.input) })
                    : "+/-" === t
                    ? e.setState({ input: -1 * e.state.input })
                    : "Clear" === t
                    ? e.setState({ input: "0" })
                    : "del" === t
                    ? e.setState({
                        input: Object(a.a)(e.state.input).slice(0, -1).join(""),
                      })
                    : e.setState({ input: e.state.input + t });
                }),
                (e.state = { input: "" }),
                e
              );
            }
            return (
              Object(d.a)(c, [
                {
                  key: "render",
                  value: function () {
                    return Object(l.jsx)("div", {
                      className: "App",
                      children: Object(l.jsxs)("div", {
                        className: "calc",
                        children: [
                          Object(l.jsx)("input", { value: this.state.input }),
                          Object(l.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "1",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "2",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "3",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "+",
                              }),
                            ],
                          }),
                          Object(l.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "4",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "5",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "6",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "-",
                              }),
                            ],
                          }),
                          Object(l.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "7",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "8",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "9",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "*",
                              }),
                            ],
                          }),
                          Object(l.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "+/-",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "0",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: ".",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "/",
                              }),
                            ],
                          }),
                          Object(l.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                className: "button",
                                children: "Clear",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                children: "=",
                              }),
                              Object(l.jsx)(b, {
                                handleClick: this.handleClick,
                                children: "del",
                              }),
                            ],
                          }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              c
            );
          })(n.Component));
      i.a.render(Object(l.jsx)(k, {}), document.getElementById("root"));
    },
  },
  [[25, 1, 2]],
]);
//# sourceMappingURL=main.4d6b0266.chunk.js.map
