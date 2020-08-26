import theme from "@nuxt/content-theme-docs";

export default theme({
    content: {
        markdown: {
            remarkExternalLinks: {
                content: {
                    type: "element",
                    tagName: "icon-external-link",
                    properties: {
                        className: ["w-4", "h-4", "ml-1", "-mt-1"]
                    }
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
