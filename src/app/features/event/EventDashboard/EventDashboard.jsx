import React, { Component } from "react"; //type rcc the press tab shortcut
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventActivity from '../EventActivity/EventActivity'
import { connect } from "react-redux";
import { deleteEvent } from "../eventActions";
import LoadingComponent from '../../../../app/layout/LoadingComponent'

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  deleteEvent
};

class EventDashboard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events, loading } = this.props;
    if(loading) return <LoadingComponent inverted={true}/>
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvents={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
