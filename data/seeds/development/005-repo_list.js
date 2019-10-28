exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("repo_list")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("repo_list").insert([
        { repo_name: "web22Git" },
        { repo_name: "Git-for-Web-Development-Project" },
        { repo_name: "User-Interface" },
        { repo_name: "UI-III-Flexbox" },
        { repo_name: "Sprint-Challenge--User-Interface" },
        { repo_name: "responsive-web-design-I" },
        { repo_name: "Preprocessing-I" },
        { repo_name: "Preprocessing-II" },
        { repo_name: "Sprint-Challenge--Advanced-CSS" },
        { repo_name: "JavaScript-I" },
        { repo_name: "JavaScript-II" },
        { repo_name: "JavaScript-III" },
        { repo_name: "JavaScript-IV" },
        { repo_name: "Sprint-Challenge--JavaScript" },
        { repo_name: "DOM-I" },
        { repo_name: "DOM-II" },
        { repo_name: "Newsfeed-Components" },
        { repo_name: "github-usercard" },
        { repo_name: "Sprint-Challenge-Applied-Javascript" },
        { repo_name: "react-american-football-scoreboard" },
        { repo_name: "lambda-calculator" },
        { repo_name: "Sprint-Challenge-React-Wars" },
        { repo_name: "React-Router-Movies" },
        { repo_name: "React-Router-Basic-Nav" },
        { repo_name: "team-builder" },
        { repo_name: "User-Onboarding" },
        { repo_name: "Sprint-Challenge-Single-Page-Apps" },
        { repo_name: "React-Todo" },
        { repo_name: "React-Github-User-Card" },
        { repo_name: "dark-mode" },
        { repo_name: "Web-Application-Testing" },
        { repo_name: "Sprint-Challenge-Advanced-React" },
        { repo_name: "react-shopping-cart" },
        { repo_name: "reducer-todo" },
        { repo_name: "Car-Sales" },
        { repo_name: "React-Redux-App" },
        { repo_name: "Sprint-Challenge-State-Management-Smurfs" },
        { repo_name: "webauth-i-guided" },
        { repo_name: "webtesting-iii-challenge" },
        { repo_name: "Auth-Friends" },
        { repo_name: "nasa-photo-of-the-day" },
        { repo_name: "portfolio-website" },
        { repo_name: "HTTP-Movies-Assignment" },
        { repo_name: "react-bubbles" }
      ]);
    });
};
