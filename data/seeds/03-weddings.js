exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          wedding_name: "Smith's Wedding",
          venue: "Old Winery",
          description:
            "It was a traditional wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guest. I kept the event underbudget"
        },
        {
          wedding_name: "The 's Wedding",
          venue: "Old Winery",
          description:
            "It was a traditional wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guest. I kept the event underbudget"
        }
      ]);
    });
};
