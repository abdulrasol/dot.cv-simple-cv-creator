import {
    writable
} from "svelte/store";

const CV = writable({
    name: '',
    jobTitle: '',
    img: '',
    aboutMe: 'D',
    contacts: {
        phone: {
            value: '672-418-3249',
            icon: '',
        },
        address: {
            value: '72710 Nathen Locks',
            icon: '',
        },
        email: {
            value: 'name@company.com',
            icon: '',
        },
    },
    professionalSkills: [
        'Microsoft Office',
    ],
    softSkills: [
        'Positivity'
    ],
    languages: [{
        language: 'English',
        level: 'Native'
    }, ],
    socials: [{
            name: 'Facebook',
            url: '',
            icon: 'facebook',
            username: ''

        },
        {
            name: 'Linkedin',
            url: '',
            icon: 'linkedin',
            username: ''

        },
        {
            name: 'Github',
            url: '',
            icon: 'github',
            username: ''

        },
        {
            name: 'Instagram',
            url: '',
            icon: 'instagram',
            username: ''

        },
        {
            name: 'Twitter',
            url: '',
            icon: 'twitter',
            username: ''

        },
        {
            name: 'Youtube',
            url: '',
            icon: 'youtube',
            username: ''

        },
        {
            name: 'TikTok',
            url: '',
            icon: 'tiktok',
            username: 'kofef'

        },
        {
            name: 'Pinterest',
            url: '',
            icon: 'pinterest',
            username: ''

        },
        {
            name: 'Snapchat',
            url: '',
            icon: 'snapchat',
            username: ''
        },
    ],
    edu: [{
        degree: 'Bachelor in Mechaincal Engineering',
        college: 'college of engineering',
        univercity: 'Harvard',
        GOD: '2019',
        address: 'Najaf, Iraq'

    }, ],
    experiences: [{
        jobTitle: 'Solar Engineer',
        company: 'Alshmis Solar',
        from: '2020',
        to: 'current',
        description: 'Sit adipisci error aut quo tenetur adipisci. Qui voluptatum voluptas ut. Saepe deleniti odit.'
    }],
    certifications: [{
        title: 'Basic English',
        from: 'Future Learnning',
        date: '2019',
        preaf: 'Ea atque explicabo ut corrupti. Tenetur nihil quod fugiat. Nisi aut amet.'
    }]
});

export default CV;