package com.cxgdev.lotteryPlusPlus.listeners;

import com.cxgdev.lotteryPlusPlus.LotteryPlusPlus;
import com.cxgdev.lotteryPlusPlus.database.DatabaseManager;
import com.ghostchu.quickshop.api.event.ShopPurchaseEvent;
import com.ghostchu.quickshop.api.event.ShopSuccessPurchaseEvent;
import net.kyori.adventure.audience.Audience;
import net.kyori.adventure.platform.bukkit.BukkitAudiences;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.minimessage.MiniMessage;
import org.bukkit.Bukkit;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.jetbrains.annotations.NotNull;
import com.ghostchu.quickshop.api.shop.Shop;

import java.util.Objects;
import java.util.UUID;
import java.util.function.Supplier;
import java.util.logging.Logger;

public class PurchaseEvent implements Listener {
    FileConfiguration config;
    Logger logger;
    DatabaseManager database;
    LotteryPlusPlus plugin;
    private final MiniMessage mm = MiniMessage.miniMessage();

    public PurchaseEvent(LotteryPlusPlus plugin, DatabaseManager databaseManager) {
        this.plugin = plugin;
        logger = plugin.getLogger();
        config = plugin.getConfig();
        database = databaseManager;
    }

    // Runs when a player purchases something from a shop
    @EventHandler
    public void onPurchase(ShopSuccessPurchaseEvent event) {
        logger.info("Shop purchase success event");

        long shopID = event.getShop().getShopId();
        logger.info(String.valueOf(shopID));

        if (config.getLongList("shops.registration").contains(shopID)) {
            logger.info("A player has bought registration... identifying.");

            UUID purchaser = event.getPurchaser();
            Player player = Bukkit.getPlayer(purchaser);

            logger.info(player.getDisplayName());

            // Create the MiniMessage component and add the info message to it.
            Component component = mm.deserialize((String) Objects.requireNonNull(config.getString("messages.registrationRecieved")));

            // Why? Don't know, couldn't tell you. But it works, and it doesn't work otherwise
            Audience audience = BukkitAudiences.create(plugin).player(player);

            // Send the message to the executing player
            audience.sendMessage(component);
        }
    }
}
