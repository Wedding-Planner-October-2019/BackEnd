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
          location: "Seattle, WA"
        },
        {
          name: "Sarah",
          phone: 18642341020,
          email: "creativeweddings@gmail.com",
          location: "Portland"
        },
        {
          name: "Jessica Jung",
          phone: 18642341020,
          email: "jessica.jung.wedding@email.com",
          location: "Atlanta, GA"
        }
      ]);
    });
};
