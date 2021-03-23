"use strict";

const Accounts = {
  index: {
    auth: false,
    handler: function (request, h) {
      return h.view("main", { title: "Welcome" });
    },
  },
  showSignup: {
    auth: false,
    handler: function (request, h) {
      return h.view("signup", { title: "Sign up" });
    },
  },
  signup: {
    auth: false,
    handler: function (request, h) {
      const user = request.payload;
      this.users[user.email] = user;
      request.cookieAuth.set({ id: user.email });
      return h.redirect("/home");
    },
  },
  showSettings: {
    handler: function (request, h) {
      var donorEmail = request.auth.credentials.id;
      const userDetails = this.users[donorEmail];
      return h.view("settings", { title: "Donation Settings", user: userDetails });
    },
  },
  updateSettings: {
    handler: function (request, h) {
      const user = request.payload;
      this.users[user.email] = user;
      return h.redirect("/settings");
    },
  },
  showLogin: {
    auth: false,
    handler: function (request, h) {
      return h.view("login", { title: "Login" });
    },
  },
  login: {
    auth: false,
    handler: function (request, h) {
      const user = request.payload;
      if (user.email in this.users && user.password === this.users[user.email].password) {
        request.cookieAuth.set({ id: user.email });
        return h.redirect("/home");
      }
      return h.redirect("/");
    },
  },
  logout: {
    handler: function (request, h) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },
};

module.exports = Accounts;
