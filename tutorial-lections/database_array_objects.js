const agentsDatabase = [
    {
        name: 'Dawn Flatley',
        title: 'Direct Configuration Liaison',
        position: 'Specialist',
        corp: 'Wyman LLC',
        phone: 433 - 945 - 2534,
        id: 156007069,
    },
    {
        name: 'Sibyl Damore',
        title: 'Global Accounts Analyst',
        position: 'Officer',
        corp: 'Lindgren - Kulas',
        phone: 949 - 981 - 7666,
        id: 133276718,
    },
    {
        name: 'Kasey Hudson',
        title: 'Customer Response Strategist',
        position: 'Manager',
        corp: 'Swaniawski and Sons',
        phone: 977 - 606 - 1586,
        id: 428927415,
    },
    {
        name: 'Derick Stokes',
        title: 'National Branding Developer',
        position: 'Liaison',
        corp: 'Adams, Smith and Berge',
        phone: 651 - 991 - 9633,
        id: 674594398,
    },
    {
        name: 'Iliana Wuckert',
        title: 'Human Quality Coordinator',
        position: 'Manager',
        corp: 'Hamill Inc',
        phone: 575 - 381 - 9592,
        id: 693037721,
    },
    {
        name: 'Faustino MacGyver',
        title: 'National Applications Producer',
        position: 'Representative',
        corp: 'Abshire - Weissnat',
        phone: 455 - 433 - 6117,
        id: 502091911,
    },
    {
        name: 'Edwin Waters',
        title: 'Corporate Security Planner',
        position: 'Orchestrator',
        corp: 'Satterfield, Stoltenberg and Ernser',
        phone: 780 - 744 - 2496,
        id: 302069216,
    },
    {
        name: 'Alvah Marks',
        title: 'Chief Program Agent',
        position: 'Supervisor',
        corp: 'Reynolds - Smith',
        phone: 241 - 215 - 3044,
        id: 214393857,
    },
    {
        name: 'Josefina Von',
        title: 'Corporate Solutions Coordinator',
        position: 'Analyst',
        corp: 'Nader - Schamberger',
        phone: 894 - 909 - 6031,
        id: 349993827,
    },
    {
        name: 'Colby Ruecker',
        title: 'Principal Factors Coordinator',
        position: 'Consultant',
        corp: 'Wintheiser and Sons',
        phone: 618 - 684 - 9131,
        id: 917907132,
    },
    {
        name: 'Judy West',
        title: 'Global Operations Analyst',
        position: 'Developer',
        corp: 'Morissette, Ryan and Thompson',
        phone: 244 - 900 - 7401,
        id: 100052233,
    },
    {
        id: '91714cf6-8bc3-4c37-8184-fb3714fade41',
        tag: 'Green Eye',
        status: 'active',
        firstName: 'Mike',
        lastName: 'Wazowski',
        department: 'Infilration',
        corp: 'Monsters Intelligence',
        role: 'thief',
    },
    {
        name: 'Chandler Schamberger',
        title: 'Lead Factors Strategist',
        position: 'Planner',
        corp: 'Cummerata, Schamberger and Smitham',
        phone: 513 - 376 - 8507,
        id: 932228091,
    },
    {
        name: 'Maud Simonis',
        title: 'Customer Response Designer',
        position: 'Liaison',
        corp: 'Monahan - Swift',
        phone: 950 - 577 - 5353,
        id: 984316754,
    },
    {
        name: 'Ora Considine',
        title: 'Regional Group Engineer',
        position: 'Producer',
        corp: 'Yundt, Thiel and Aufderhar',
        phone: 729 - 787 - 3096,
        id: 395726604,
    },
    {
        name: 'Amparo Prohaska',
        title: 'Central Division Assistant',
        position: 'Supervisor',
        corp: 'Hegmann - Funk',
        phone: 637 - 448 - 7141,
        id: 572949967,
    },
    {
        name: 'Haven Hudson',
        title: 'Central Interactions Engineer',
        position: 'Orchestrator',
        corp: 'Kemmer, Wiegand and Boehm',
        phone: 515 - 678 - 9601,
        id: 840930698,
    },
    {
        name: 'Dale Raynor',
        title: 'Legacy Accounts Planner',
        position: 'Strategist',
        corp: 'Reichel, Collins and Flatley',
        phone: 952 - 955 - 5347,
        id: 728234489,
    },
    {
        name: 'Deron Cruickshank',
        title: 'Global Accounts Strategist',
        position: 'Designer',
        corp: 'Fadel - Jacobi',
        phone: 861 - 204 - 7767,
        id: 209321312,
    },
];

console.dir(agentsDatabase);
console.table(agentsDatabase);

function manipulateAgentsArray(agentsDatabase, tag) {
    const isAgentPresent = agentsDatabase.some(
        (agent) => agent.tag === 'Green Eye'
    );
    console.log(isAgentPresent);

    if (isAgentPresent) {
        const agentUnderCover = agentsDatabase.find(
            (agent) => agent.tag === 'Green Eye'
        );

        console.log('Agent is here:', agentUnderCover.lastName);

        let indexCover = agentsDatabase.indexOf(agentUnderCover);
        let sliceCover = agentsDatabase.slice(indexCover);

        console.log(indexCover);
        console.log(sliceCover);
    } else {
        const copiedArray = [...agentsDatabase];
        copiedArray.push(...sliceCover);

        console.log('Copied Array:', copiedArray);

        for (let i = copiedArray.length - 1; i >= 0; i--) {
            //! Этот цикл начинается с последнего индекса массива и продолжается до первого индекса.
            const j = Math.floor(Math.random() * (i + 1));
            //! Здесь переменная j получает случайное целое число от 0 до i (включительно).
            //! Это позволяет случайным образом выбирать индекс элемента для обмена.
            [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
            //! С помощью деструктуризации массива элементы с индексами i и j меняются местами.
            //! Это позволяет переставить элементы в случайном порядке в пределах массива.
            console.log('Shuffled Array:', copiedArray);
            console.log('Agent compromised');
        }
    }
}
manipulateAgentsArray(agentsDatabase, 'Green Eye');

const AgentRole = function () {
    this.stealData = 'Identify and take data from enemy server.';
    this.meetingPoint = meetingPoint;
    this.agentsArray = agentsDatabase;

    this.getData = function () {
        return this.stealData;
    };

    this.setData = function (newData) {
        this.stealData = newData;
    };

    this.completeMission = function (targetLocation) {
        if (targetLocation) {
            this.setData('Data target has been completed');
        } else {
            console.log(this.returnToMeetingPoint());
            this.removeAgent();
        }

        this.returnToMeetingPoint = function () {
            return `Returning to meeting point: ${this.meetingPoint}.`;
        };

        this.removeAgent = function () {
            const index = this.agentsArray.indexOf(this);
            if (index !== -1) {
                this.agentsArray.splice(index, 1);
            }
            console.log('Agent has been removed from the agents array.');
        };

        return `Mission completed. Extracted sensitive data from the enemy's server at location: ${targetLocation}.`;
    };
};

const agentsArray = [];
const meetingPoint = 'Secret meeting location';
const agent = new AgentRole(); //! Вызов конструктора с помощью new (при создании экземпляра)

const missionLocation = '123 Lenin Street, Enemy Headquarters';
console.log(agent.completeMission(missionLocation));

const missionSuccess = true; // замени на false для симуляции неудачи миссии
agent.completeMission(missionSuccess ? missionLocation : null);
