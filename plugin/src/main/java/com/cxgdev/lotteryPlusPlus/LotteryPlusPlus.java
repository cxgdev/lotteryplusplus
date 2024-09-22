package com.cxgdev.lotteryPlusPlus;

import com.ghostchu.quickshop.api.QuickShopAPI;
import com.ghostchu.quickshop.api.event.ShopPurchaseEvent;
import com.ghostchu.quickshop.api.shop.Shop;
import com.ghostchu.quickshop.api.shop.ShopManager;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.java.JavaPlugin;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;

public final class LotteryPlusPlus extends JavaPlugin {

    Logger logger = getLogger();

    @Override
    public void onEnable() {
        QuickShopAPI api = QuickShopAPI.getInstance();
        Plugin internalInstance =  QuickShopAPI.getPluginInstance();

        logger.info("Enabled plugin");

        if (internalInstance == null) {
            logger.warning("QuickShop not found!");
        }

        // Create a shop manager
        ShopManager manager = api.getShopManager();

        // Get a list of all shop
        List<Shop> allShops = manager.getAllShops();

        for (Shop shop : allShops) {
            logger.info(String.valueOf(shop.getShopId()));
        }

        // Host an HTTP server (port 22693)
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(getConfig().getInt("port")), 0);
            server.createContext("/purchases", new APIHandler());
            server.setExecutor(null); // creates a default executor
            server.start();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    // Runs when a player purchases something from a shop
    public void onPurchase(ShopPurchaseEvent event) {
        if (!event.isCancelled()) {
            logger.info("Shop purchase event was NOT cancelled!");

            long shopID = event.getShop().getShopId();
            logger.info(String.valueOf(shopID));

            UUID purchaser = event.getPurchaser();
            logger.info(String.valueOf(purchaser));

            int amount = event.getAmount();
            logger.info(String.valueOf(amount));

            double total = event.getTotal();
        } else {
            logger.warning("Shop purchase event was cancelled");
        }
    }

    static class APIHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            // response needs to be JSON array of recent purchases

            String response = "This is the response";
            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }

    @Override
    public void onDisable() {
        // Plugin shutdown logic
    }
}
