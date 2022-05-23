# Opeyemi's Soccer Coaches Profile App

This project was bootstrapped

## Overview

This is a simple project that lets users search and enlighten themselves with the profiles of their favorite soccer(football) team coaches in the world.
The app also displays the last 3 football clubs coached by these illustrious managers.

### Demo Link

<https://soccer-coach-profile.vercel.app>

### Screenshots

![App before search parameter is entered](https://res.cloudinary.com/resourcefulmind-inc/image/upload/v1653322246/Screen_Shot_2022-05-23_at_5.03.48_PM_m6v28j.png "Before Search Parameter")

![App after search parameter is entered](https://res.cloudinary.com/resourcefulmind-inc/image/upload/v1653322595/Screen_Shot_2022-05-23_at_5.15.17_PM_tcwcm3.png "After Search Parameter")

### Back Story

I was watching Sky Sports News a week before I started this app and there was lots of talk about Jack Grealish, Kylian Mbappe and some other players, their past clubs and their achievements. I was bettering my knowledge of React also at the time and I thought to myself, "why not build a simple app where users could search for players and see all that?

Yeah...this originally started out as an app to search player profiles. I started building while learning and when I searched for APIs to help me with the players, it hit me that THE COACHES DO NOT GET AS MUCH RECOGNITION AS THE PLAYERS.

I made the turnaround and started building for the coaches instead. Still love the players very much though.

### Technologies Used

This application is built with [React](https://github.com/facebook/create-react-app).

[Semantic UI](https://semantic-ui.com) is the preferred CSS development framework.

[Rapid API](https://rapidapi.com/api-sports/api/api-football/) is the preferred choice for API. I had a lot of problems getting a free API to use for this project before finding it though.

[Axios](https://axios-http.com/docs/api_intro) is the preferred tool for sending API requests.

### Setup

- Download or clone the repository.
- To set up your dev environment (create a project, install React and its dependencies), run the following in your terminal or CLI:

```bash
npx create-react-app my-app
cd my-app
```

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Approach

I adopted the BEM naming style for my css class names and used the standard React conventions for my classNames.

### Deployment

[Vercel] (<https://www.vercel.com>) is the preferred hosting service for this app.

### Limitations

- The application might not render any profiles for coaches who have coached a lot of clubs or just a single club.

- The API also does not cover for full names. It is better to use the popular name of the coach.

### Status

This is the first and possibly final version of this project. If subsequent changes are made, there will be a version 2.0.

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)