package com.cxgdev.lotteryPlusPlus.commands;

import com.cxgdev.lotteryPlusPlus.LotteryPlusPlus;
import com.cxgdev.lotteryPlusPlus.listeners.PurchaseEvent;
import com.ghostchu.quickshop.api.event.ShopPurchaseEvent;
import com.google.common.eventbus.Subscribe;
import net.kyori.adventure.audience.Audience;
import net.kyori.adventure.platform.bukkit.BukkitAudiences;
import net.kyori.adventure.text.Component;
import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.command.TabExecutor;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import org.jetbrains.annotations.NotNull;
import net.kyori.adventure.text.minimessage.MiniMessage;
import org.jetbrains.annotations.Nullable;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.time.*;
import java.time.temporal.ChronoUnit;
import java.util.UUID;
import java.util.logging.Logger;

public class LotteryPlusPlusCommand implements TabExecutor,CommandExecutor {

    private final LotteryPlusPlus plugin;
    private final MiniMessage mm = MiniMessage.miniMessage();
    private final FileConfiguration config;

    public LotteryPlusPlusCommand(LotteryPlusPlus plugin) {
        this.plugin = plugin;
        this.config = plugin.config;
    }

    @Override
    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, String[] args) {
        if (sender instanceof Player) {
            if (args.length == 0 || (args.length == 1 && Objects.equals(args[0], "info"))) {
                // Why? Don't know, couldn't tell you. But it works, and it doesn't work otherwise
                Audience player = BukkitAudiences.create(plugin).player((Player) sender);

                // Loop through the array of lines
                for (Object message : Objects.requireNonNull(config.getList("messages.info"))) {
                    // Create the MiniMessage component and add the info message to it.
                    Component component = mm.deserialize((String) Objects.requireNonNull(message));

                    // Send the message to the executing player
                    player.sendMessage(component);
                }
            }
        }

        return true;
    }

    @Override
    public @Nullable List<String> onTabComplete(@NotNull CommandSender commandSender, @NotNull Command command, @NotNull String s, @NotNull String[] strings) {
        return Arrays.asList("info", "remaining", "active", "top", "winners");
    }
}
