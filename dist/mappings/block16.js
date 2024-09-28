export default {
    uuid: "1711d07c-6187-4872-8acb-a5ec908fc199",
    component: "EleganteBlock16",
    config: {
        content: {
            text: {
                heading: "Our values",
                subheading: "Find us at these locations",
            },
            image: {
                src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/our-values.webp",
            },
            cards: [
                {
                    title: "You first",
                    subtitle: "We are definitely ride-or-die for weeknight-easy meals but it’s definitely a bonus when it can still feel a little fancy-adjacent, you know? A little elevated. We also love a frozen pizza or an “ok, it’s popcorn for dinner!” kind of night, too",
                },
                {
                    title: "Quick delivery",
                    subtitle: "We are definitely ride-or-die for weeknight-easy meals but it’s definitely a bonus when it can still feel a little fancy-adjacent, you know? A little elevated. We also love a frozen pizza or an “ok, it’s popcorn for dinner!” kind of night, too",
                },
                {
                    title: "User-friendly prices",
                    subtitle: "We are definitely ride-or-die for weeknight-easy meals but it’s definitely a bonus when it can still feel a little fancy-adjacent, you know? A little elevated. We also love a frozen pizza or an “ok, it’s popcorn for dinner!” kind of night, too",
                },
            ],
        },
        configuration: {
            fonts: {
                heading: "fonts.heading",
                body: "fonts.body",
            },
            colors: {
                main: {
                    100: "neutral.500",
                    200: "primary.main",
                    300: "primary.200",
                    400: "neutral.500",
                    500: "alert.error",
                    600: "neutral.200",
                    700: "neutral.100",
                },
                background: {
                    100: "neutral.100",
                },
            },
        },
    },
    pages: ["about"],
    precedence: 3,
};
