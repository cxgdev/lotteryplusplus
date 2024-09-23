package com.cxgdev.lotteryPlusPlus.commands;

import com.cxgdev.lotteryPlusPlus.LotteryPlusPlus;
import net.kyori.adventure.audience.Audience;
import net.kyori.adventure.platform.bukkit.BukkitAudiences;
import net.kyori.adventure.text.Component;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import org.jetbrains.annotations.NotNull;
import net.kyori.adventure.text.minimessage.MiniMessage;

import java.util.Objects;

public class LotteryPlusPlusCommand implements CommandExecutor {

    private final LotteryPlusPlus plugin;
    private final MiniMessage mm = MiniMessage.miniMessage();

    public LotteryPlusPlusCommand(LotteryPlusPlus plugin) {
        this.plugin = plugin;
    }

    @Override
    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, String[] args) {
        FileConfiguration config = plugin.getConfig();

        if (sender instanceof Player) {
            // Why? Don't know, couldn't tell you. But it works, and it doesn't work otherwise
            Audience player = BukkitAudiences.create(plugin).player((Player) sender);
            Component component = mm.deserialize(Objects.requireNonNull(config.getString("messages.prefix")));

            player.sendMessage(component);
        }

        return true;
    }
}
