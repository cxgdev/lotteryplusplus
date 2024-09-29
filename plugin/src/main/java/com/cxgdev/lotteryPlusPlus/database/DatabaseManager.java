package com.cxgdev.lotteryPlusPlus.database;

import com.cxgdev.lotteryPlusPlus.LotteryPlusPlus;
import org.bukkit.Bukkit;
import org.jetbrains.annotations.NotNull;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Logger;

public class DatabaseManager {
    private Connection connection;
    Logger logger;

    public DatabaseManager(String path, @NotNull LotteryPlusPlus plugin) {

        logger = plugin.getLogger();

        try {
            connection = DriverManager.getConnection("jdbc:sqlite:" + path);

            try (Statement statement = connection.createStatement();) {
                // Create table with stuff
                statement.execute("""
                                CREATE TABLE IF NOT EXISTS players (
                                uuid TEXT PRIMARY KEY,
                                username TEXT NOT NULL,
                                registered BOOLEAN NOT NULL DEFAULT FALSE,
                                tickets INTEGER NOT NULL DEFAULT 0,
                                timesWon INTEGER NOT NULL DEFAULT 0)
                        """);
            }
        } catch (SQLException e) {
            logger.warning("Could not load the database for Lottery++. Disabling plugin...");
            logger.warning(e.getMessage());
            Bukkit.getPluginManager().disablePlugin(plugin);
        }
    }

    public void closeConnection() throws SQLException {
        if (connection != null && !connection.isClosed()) {
            connection.close();
        }
    }
}
