exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_info")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_info").insert([
        {
          name: "John Smith",
          phone: 18002341000,
          email: "johnSmith@gmail.com",
          location: "Seattle, WA",
          user_id: 1
        },
        {
          name: "Sarah",
          phone: 18642341020,
          email: "creativeweddings@gmail.com",
          location: "Portland",
          user_id: 2
        },
        {
          name: "Jessica Jung",
          phone: 18642341020,
          email: "jessica.jung.wedding@email.com",
          location: "Atlanta, GA",
          user_id: 3
        }
      ]);
    });
};
