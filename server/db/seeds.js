use codeclan_journal;
db.dropDatabase();

db.entries.insertOne([
    {
        date: "20/01/2023",
        journal: "Today was a good day and we achieved this."
    }
])