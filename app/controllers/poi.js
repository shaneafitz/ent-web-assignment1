"use strict";

const Poi = {
  home: {
    handler: function (request, h) {
      return h.view("home", { title: "Make a Donation" });
    },
  },
  report: {
    handler: function (request, h) {
      return h.view("report", {
        title: "Islands  ",
        pois: this.pois,
      });
    },
  },
  create: {
    handler: function (request, h) {
      const data = request.payload;
      data.creator = this.currentUser;
      this.pois.push(data);
      return h.redirect("/report");
    },
  },
};

module.exports = Poi;
