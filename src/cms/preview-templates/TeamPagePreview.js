import React from 'react';
import PropTypes from 'prop-types';
import { TeamPageTemplate } from '../../templates/team-page';

const TeamPagePreview = ({ entry, widgetFor }) => (
  <TeamPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TeamPagePreview;
