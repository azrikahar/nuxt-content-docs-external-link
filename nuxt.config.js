import theme from "@nuxt/content-theme-docs";

export default theme({
    content: {
        markdown: {
            remarkExternalLinks: {
                content: {
                    type: "element",
                    tagName: "svg",
                    properties: {
                        className: ["w-4", "h-4", "ml-1", "-mt-1", "stroke-2"],
                        style: ["stroke-linecap: round;", "stroke-linejoin: round;"],
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                    },
                    children: [
                        {
                            type: "element",
                            tagName: "path",
                            properties: {
                                d:
                                    "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
                            },
                        },
                    ],
                },
                contentProperties: {
                    className: [
                        "inline-block",
                        "align-middle",
                        "text-gray-600",
                        "dark:text-gray-400",
                    ],
                },
            },
        },
    },
});
