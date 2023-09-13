import React, { useState, useRef, useEffect } from "react"

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { TimeLineData } from "../../constants/constants"

const TOTAL_CAROUSEL_COUNT = TimeLineData.length

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0)
  const carouselRef = useRef()

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" })
  }

  const handleClick = (e, i) => {
    e.preventDefault()

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      )

      scroll(carouselRef.current, scrollLeft)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      )

      setActiveItem(index)
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0)
    }

    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am a highly motivated and experienced Civil Engineer with a strong
        academic background and over nine years of professional experience in
        the field. My passion for engineering and infrastructure development has
        driven me to excel in various roles, contributing to significant
        projects in both India and in Gulf Countries. <br />
        Currently serving as a Manager - Roads at Zydex Industries Pvt Ltd.,
        where I oversee the construction and management of infrastructure
        projects, with a focus on innovative technologies. Led the upgradation
        of a crucial NH-222 section in Maharashtra during my tenure as a Project
        Engineer at Patil Constructions and Infrastructure Ltd. Demonstrated my
        skills in project execution, materials testing, and quality control
        during my time at Oman United Engineering Service LLC. Acted as a Senior
        Technical Engineer at Zydex Industries Pvt Ltd., contributing to highway
        projects and ensuring the quality of construction materials. Gained
        valuable experience at Sadbhav Engineering Limited, working on a
        significant project under KSHIP-II in Karnataka. <br />I am committed to
        contributing my knowledge, skills, and dedication to any organization I
        work with, striving for excellence in every project undertaken. With a
        strong foundation in civil engineering and a proven track record of
        successful project delivery, I am eager to take on new challenges and
        continue making meaningful contributions to the field.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width='208'
                    height='6'
                    viewBox='0 0 208 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                      fill='url(#paint0_linear)'
                      fill-opacity='0.33'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear'
                        x1='-4.30412e-10'
                        y1='0.5'
                        x2='208'
                        y2='0.500295'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='white' />
                        <stop
                          offset='0.79478'
                          stop-color='white'
                          stop-opacity='0'
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type='button'
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          )
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  )
}

export default Timeline
