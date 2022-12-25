import styled from "styled-components"

interface FlexProps {
    justifyContent?:any
}

export const Flex = styled.div`
    display: flex;
    justify-content: ${(props:FlexProps)=> props.justifyContent}
`