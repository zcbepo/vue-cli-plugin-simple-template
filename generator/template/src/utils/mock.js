export default [
    {
        title: 'nav1',
        route: 'page1',
    },
    {
        title: 'menu1',
        route: 'menu1',
        children: [
            {
                title: 'nav2',
                route: 'page2'
            },
        ]
    },
    {
        title: 'menu2',
        route: 'menu2',
        children: [
            {
                title: 'nav3',
                route: 'page3'
            },
            {
                title: 'nav4',
                route: 'page4'
            },
        ]
    },
]