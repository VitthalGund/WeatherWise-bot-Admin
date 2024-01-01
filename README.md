# WeatherWiseBot

![WeatherWiseBot Logo](https://github.com/VitthalGund/WeatherWise-bot/assets/97181033/3242fabe-bc40-4a34-b6e2-dbba7f5f3173)

**Stay Ahead, WeatherWise.**

WeatherWiseBot is your intelligent weather companion on Telegram, providing you with daily weather updates at your fingertips. Its user-friendly interface and seamless integration with the NestJS framework make subscribing for weather alerts a breeze.

## Features

- **Daily Weather Updates:** Accurate and timely weather information delivered directly to your Telegram account.

- **User-Friendly Interface:** Easily subscribe to weather alerts with an intuitive design and seamless integration with NestJS.

- **Intelligent Insights:** Beyond raw data, WeatherWiseBot provides intelligent and wise insights into the weather.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- **Node.js:** Ensure Node.js is installed on your system.
  ```bash
  node --version
  ```

- **NestJS:** Install NestJS globally.
  ```bash
  npm install -g @nestjs/cli
  ```

- **React.js:** Install React.js globally.
  ```bash
  npm install -g create-react-app
  ```

- **Telegram Account:** Create a Telegram account if you don't have one.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/VitthalGund/WeatherWiseBot.git
   ```

2. **Navigate to the Project:**
   ```bash
   cd WeatherWiseBot
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up Configuration:**
   - Create a `.env` file in the root directory with the following content:
     ```
     TELEGRAM_API_KEY=your_telegram_api_key
     OTHER_CONFIG=value
     ```

5. **Run the Application:**
   ```bash
   npm start
   ```

   The WeatherWiseBot should now be running and ready to provide weather updates.

## Building Admin Panel with React.js

To build the admin panel, follow these steps:

1. **Create a New React App:**
   ```bash
   npx create-react-app weatherwise-admin
   cd weatherwise-admin
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Configuration:**
   - Configure your React app to communicate with the NestJS API by setting the API endpoint in your `.env` or environment variables.

4. **Build the Admin Panel:**
   - Create React components for managing settings, user accounts, and other admin functionalities.
   - Utilize the Fetch API or a library like Axios to interact with the NestJS API.

5. **Run the Admin Panel:**
   ```bash
   npm start
   ```

   The admin panel should be accessible at [http://localhost:3000](http://localhost:3000).

## Why WeatherWiseBot?

- **Relevance:** The name clearly communicates the bot's primary function – keeping users informed about the weather.

- **Memorability:** "WeatherWise" is easy to remember, making it more likely for users to recall and engage with the bot.

- **Trust and Intelligence:** The inclusion of "Wise" in the name suggests that the bot is not just about raw data but is intelligent and provides wise insights into the weather.

## Support

If you encounter any issues or have questions, don't hesitate to [raise an issue on GitHub](https://github.com/VitthalGund/WeatherWiseBot/issues/new).

## Licensing

WeatherWiseBot is licensed under the [Apache-2.0 license](https://github.com/VitthalGund/WeatherWiseBot/blob/main/LICENSE). Feel free to use, modify, and distribute this codebase in your projects.
