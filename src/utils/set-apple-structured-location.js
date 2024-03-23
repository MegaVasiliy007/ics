import formatText from "./format-text";

export default ({ title, radius }) => {
    return `X-APPLE-RADIUS=${radius};X-TITLE=${formatText(title)}`
}
