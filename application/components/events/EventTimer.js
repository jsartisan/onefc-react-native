import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native';

export default function EventTimer({ startTime }) {
  const eventTime = new Date(startTime);
  const currentTime = new Date();

  const diffTime = eventTime - currentTime;
  let duration = moment.duration(diffTime, 'milliseconds');
  const interval = 1000;

  duration = moment.duration(duration - interval, 'milliseconds');

  const [time, setTime] = useState(duration);

  const timer = () => {
    duration = moment.duration(duration - interval, 'milliseconds');
    setTime(duration);
  };

  useEffect(() => {
    if (time <= 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <View style={styles.timer}>
      <View style={styles.time}>
        <Text style={styles.value}>{time.days()}</Text>
        <Text style={styles.label}>DAYS</Text>
      </View>

      <View style={styles.time}>
        <Text style={styles.value}>{time.hours()}</Text>
        <Text style={styles.label}>HRS</Text>
      </View>

      <View style={styles.time}>
        <Text style={styles.value}>{time.minutes()}</Text>
        <Text style={styles.label}>MINS</Text>
      </View>

      <View style={styles.time}>
        <Text style={styles.value}>{time.seconds()}</Text>
        <Text style={styles.label}>SECS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
  },
  time: {
    marginHorizontal: 5,
  },
  value: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  label: {
    color: '#fff',
    marginTop: 2,
    fontSize: 12,
    textAlign: 'center',
  },
});
