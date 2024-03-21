'use client';

import React, { useState, useEffect } from 'react';
import '/styles/Clock.css'; // Import CSS file for styling

const AlarmSystem = () => {
  const [alarms, setAlarms] = useState([
    { datetime: new Date('2024-03-21T04:03:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-21T18:31:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-22T04:00:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-22T18:34:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-23T03:57:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-23T18:36:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-24T03:53:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-24T18:38:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-25T03:50:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-25T18:40:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-26T03:47:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-26T18:42:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-27T03:44:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-27T18:44:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-28T03:40:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-28T18:46:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-29T03:37:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-29T18:48:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-30T03:33:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-30T18:50:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-03-31T04:30:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-03-31T19:52:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-01T04:27:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-01T19:54:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-02T04:23:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-02T19:56:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-03T04:19:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-03T19:58:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-04T04:16:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-04T20:00:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-05T04:12:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-05T20:02:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-06T04:09:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-06T20:04:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-07T04:05:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-07T20:06:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-08T04:01:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-08T20:08:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-09T03:57:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-09T20:10:00'), videoUrl: '/assets/images/abb.mp4' },
    { datetime: new Date('2024-04-10T03:53:00'), videoUrl: '/assets/images/ac.mp4' },
    { datetime: new Date('2024-04-10T20:12:00'), videoUrl: '/assets/images/abb.mp4' },
  ]);

  const [currentAlarmIndex, setCurrentAlarmIndex] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const checkAlarm = () => {
      const now = new Date();
      
      for (let i = 0; i < alarms.length; i++) {
        var alarmTime = new Date(alarms[i].datetime); // Create a new Date object to avoid modifying the original one
        alarmTime.setMinutes(alarmTime.getMinutes() + 1); // Add one minute
        if (alarms[i].datetime <= now && now <= alarmTime) {
          setCurrentAlarmIndex(i);
          break;
        }
      }
    };

    // Check for alarm every second
    const interval = setInterval(checkAlarm, 1000);

    return () => clearInterval(interval);
  }, [alarms]);

  useEffect(() => {
    if (currentAlarmIndex !== null) {
      const video = document.getElementById('video');
      video.src = alarms[currentAlarmIndex].videoUrl;
      video.load(); // Load the video source
      video.play(); // Play the video
    } else {
      const video = document.getElementById('video');
      video.src = '/assets/images/add.mp4';
      video.load(); // Load the video source
      video.play(); // Play the video
    }
  }, [currentAlarmIndex, alarms]);

  const handleVideoEnded = () => {
    // Video ended, reset current alarm index
    setCurrentAlarmIndex(null);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format the time to HH:mm:ss
  const formatTime = (time) => {
    return time.toLocaleTimeString('en-US', { hour12: false });
  };

  // Format the date to MM/DD/YYYY
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US');
  };

  const alarmsForToday = alarms.filter(alarm => {
    const alarmDate = new Date(alarm.datetime);
    return alarmDate.toDateString() === currentDateTime.toDateString();
  });

  return (
    <>
        <p className="logo-text ml-10 mt-5">Ramzan Sehr o Iftar Dua Alert</p>
        <div className="clock-container">
            <div className="clock">
                <div className="time">{formatTime(currentDateTime)}</div>
                <div className="date">{formatDate(currentDateTime)}</div>
                {/* <div className="logo-text">{currentDateTime.toString()}</div> */}
                <div>
                    {alarmsForToday.map((alarm, index) => (
                    <p className="date" key={index}>
                        {index % 2 === 0 ? "Sehri" : "Iftari"}: {formatTime(alarm.datetime)}
                    </p>
                    ))}
                </div>
            </div>
            <div>
            <video id="video" onEnded={handleVideoEnded} controls/>
            </div>
        </div>
    </>
  );
};

export default AlarmSystem;
