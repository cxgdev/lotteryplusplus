package com.cxgdev.lotteryPlusPlus;

import com.cxgdev.lotteryPlusPlus.commands.LotteryPlusPlusCommand;
import com.cxgdev.lotteryPlusPlus.database.DatabaseManager;
import com.cxgdev.lotteryPlusPlus.listeners.PurchaseEvent;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.plugin.java.JavaPlugin;

import java.util.Objects;
import java.util.logging.Logger;

public final class LotteryPlusPlus extends JavaPlugin {

    Logger logger = getLogger();
    public FileConfiguration config = getConfig();

    @Override
    public void onEnable() {
        logger.info("Enabling Lottery++");

        saveDefaultConfig();

        Objects.requireNonNull(this.getCommand("lpp"))
                .setExecutor(new LotteryPlusPlusCommand(this));

        if (!getDataFolder().exists()) {
            getDataFolder().mkdirs();
        }

        DatabaseManager database = new DatabaseManager(getDataFolder().getAbsolutePath() + "/lpp.db", this);

        logger.info("Registering events...");
        getServer().getPluginManager().registerEvents(new PurchaseEvent(this, database), this);
    }

    @Override
    public void onDisable() {
        // Plugin shutdown logic
    }
}
