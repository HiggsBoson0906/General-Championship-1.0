const basketball = [
    {
        "Team": "Civil & Mechanical",
        "points": 0
    },
    {
        "Team": "Electrical & Electronics and Communication",
        "points": 0
    }, {
        "Team": "Computer Science & Information Technology",
        "points": 0
    }, {
        "Team": "BioTechnology & Biomed & Chemical",
        "points": 0
    }, {
        "Team": "Metallurgy & Mining",
        "points": 0
    }, {
        "Team": "Architecture and MCA",
        "points": 0
    }, {
        "Team": "All Postgraduates(M.Tech/M.Sc.)",
        "points": 0
    }, {
        "Team": "All Ph.D. Scholars",
        "points": 0
    }, {
        "Team": "M.Tech Applied Geology",
        "points": 0
    }
];

basketball.sort((a, b) => {
    return b.points - a.points;
});

export default basketball;
