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
            "It was a traditional wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
          user_info_id: 1
        },
        {
          wedding_name: "Jennifer Cutler & Oscar Flores Wedding",
          venue: "Smith's Farm",
          description:
            "It was a traditional wedding held on a lovely fall evening. We were able to plan a wedding for 50 guests.",
          user_info_id: 2
        },
        {
          wedding_name: "Jennifer Cutler & Oscar Flores Wedding",
          venue: "Smith's Farm",
          description:
            "It was a traditional wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
          user_info_id: 2
        },
        {
          wedding_name: "The 's Wedding",
          venue: "Old Winery",
          description:
            "It was a traditional wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
          user_info_id: 3
        },
        {
          wedding_name: "The Gates's Wedding",
          venue: "Space needle",
          description: "A small wedding",
          user_info_id: 3
        },
        {
          wedding_name: "Hunter & Mackenzie Wedding",
          venue: "East Sun Winery",
          description:
            "It was a nontraditional wedding held on a warm summer afternoon. We were able to plan a wedding for over 150 guests. The theme was formal country",
          user_info_id: 3
        }
      ]);
    });
};
