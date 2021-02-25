import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Heading, Link, Icon } from "ui"

const BlogHeadContainer = ({ credits, author, date, title, to, sx, ...props }) => {
  const iconStyles = {
    mr: "xsmall",
    pt: 2,
  }

  return (
    <Box
      as='section'
      __css={{
        width: "100%",
        py: ["large", null, "xlarge"],
        px: ["medium", "large"],
        zIndex: 4,
        maxWidth: 840,
        mx: "auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        ...sx,
      }}
      {...props}
    >
      <Heading
        as='h1'
        sx={{ fontSize: ["4xl", "5xl"], mb: "small", minWidth: "100%", ...sx }}
      >
        {title}
      </Heading>
      <Box __css={{ pr: "medium" }}>
        {to ? (
          <Link
            to={to}
            ariaLabel={author.label || author.name}
            sx={{ color: "inherit", cursor: "pointer" }}
          >
            <Icon icon='user' sx={{ ...iconStyles }} />
            {author.name}
          </Link>
        ) : (
          <>
            <Icon icon='user' sx={{ ...iconStyles }} />
            {author.name}
          </>
        )}
      </Box>
      <Box __css={{ pr: "medium" }}>
        <Icon icon='calendar' sx={{ ...iconStyles }} />
        {date}
      </Box>
      {credits && (
        <Box
          __css={{
            position: "absolute",
            zIndex: 4,
            bottom: "small",
            left: "medium",
            fontWeight: "thin",
            fontSize: "tiny",
            fontStyle: "italic",
          }}
          {...props}
        >
          {credits}
        </Box>
      )}
    </Box>
  )
}

BlogHeadContainer.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
  }).isRequired,
  credits: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  sx: PropTypes.shape({}),
}

BlogHeadContainer.defaultProps = {
  credits: undefined,
  to: undefined,
  sx: undefined,
}

export default BlogHeadContainer
