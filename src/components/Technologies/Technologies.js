import React from "react"
import {
  DiReact,
  DiZend,
  DiDotnet,
  DiDatabase,
  DiIntellij,
  DiRuby,
  DiMarkdown,
  DiPhonegap,
} from "react-icons/di"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles"

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Having a M.Tech degree in Highway Technology, I Have expertise in highway
      engineering and related technologies.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiDotnet size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Nano-Technology Additives</ListTitle>
          <ListParagraph>
            Innovative technology involving
            <br />
            Zydex Nanotechnology Additives
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Materials Testing</ListTitle>
          <ListParagraph>
            Conducting QA QC lab tests for
            <br />
            Soil And Asphalt Mixes
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Design and Execution</ListTitle>
          <ListParagraph>
            Mxperience in road design, both geometrics and structural road
            design <br />
            various engineering and design software and technologies
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>DPR and MPR</ListTitle>
          <ListParagraph>
            Maintaining DPR and MPR for a project <br />
            familiarity with project documentation and reporting tools
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMarkdown size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Project Management</ListTitle>
          <ListParagraph>
            Experience in managing construction projects <br />
            includes project management software and methodologies
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiIntellij size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Design and Estimates</ListTitle>
          <ListParagraph>
            Experience in designing internal roads, preparing designs and
            estimates for rural roads <br />
            involve engineering design software
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiRuby size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Quality Control</ListTitle>
          <ListParagraph>
            Regular testing of materials and monitoring and assisting with
            quality control aspects <br />
            quality control processes and equipment
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPhonegap size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Planning and Billing</ListTitle>
          <ListParagraph>
            Experience in planning and billing for construction projects, <br />
            involve project management and accounting software.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)

export default Technologies
