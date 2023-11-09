import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      // Split the time into hours, minutes, and seconds
      const timeArray = time.split(':');
      let hours = parseInt(timeArray[0]);
      let minutes = parseInt(timeArray[1]);
      let seconds = parseInt(timeArray[2]);

      // Decrease the seconds
      seconds--;

      if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
          minutes = 59;
          hours--;

          if (hours < 0) {
            // Timer has reached 00:00:00
            clearInterval(timer);
          }
        }
      }

      // Format hours, minutes, and seconds with leading zeros
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');

      // Update the timer state
      setTime(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timerText: {
    fontWeight: 'bold',
  },
});

export default CountdownTimer;
