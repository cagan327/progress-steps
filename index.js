window.onload = function () {
  var app = new Vue({
    el: "#app",
    data: {
      message: "Progress Steps",
      endValue: 4,
      current: 1,
    },
    computed: {
      canGoNext: function () {
        return this.current < this.endValue;
      },
      canGoBack: function () {
        return this.current > 1;
      },
    },
    methods: {
      goBack: function () {
        this.current = Math.max(1, this.current - 1);
      },
      goNext: function () {
        this.current = Math.min(this.endValue, this.current + 1);
      },
      stepReached: function (n) {
        return this.current >= n;
      },
    },
  });
};
