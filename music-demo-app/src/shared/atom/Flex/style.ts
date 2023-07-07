import styled from "styled-components"

interface FlexProps {
    justifyContent?:string
    direction?:string
}

export const Flex = styled.div`
    display: flex;
    justify-content: ${(props:FlexProps)=> props.justifyContent}
    flex-direction: ${(props:FlexProps)=> props.direction} 
`