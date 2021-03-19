"use strict";

const Poi = {
  home: {
    handler: function (request, h) {
      return h.view("home", { title: "Welcome" });
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
      var creatorEmail = request.auth.credentials.id;
      data.donor = this.users[creatorEmail];
      this.pois.push(data);
      return h.redirect("/report");
    },
  },
};

module.exports = Poi;
