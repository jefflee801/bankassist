import React from 'react';
import { Item, Divider } from 'semantic-ui-react';

const Steps = ({ color, icon, title, content }) => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={icon} />
      <Item.Content>
        <Item.Header as='a'>STEP {title}</Item.Header>
        <Divider style={{ color }}/>
        <Item.Description>
          {content}
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)


export default Steps;