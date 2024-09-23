package com.cxgdev.lotteryPlusPlus;

import com.cxgdev.lotteryPlusPlus.commands.LotteryPlusPlusCommand;
import com.ghostchu.quickshop.api.event.ShopPurchaseEvent;
import org.bukkit.plugin.java.JavaPlugin;

import java.util.Objects;
import java.util.logging.Logger;

public final class LotteryPlusPlus extends JavaPlugin {

    Logger logger = getLogger();

    /*
        FOR MESSY:

        How this should work:

        Whenever a player does a purchase, check if the shop ID matches
        one of the IDs returned when making a GET request to:

        api.cxgdev.com/lpp/shops

        This should return an array of numbers, the numbers being the shop IDs.

        If it matches, then check if the player has ALSO bought a ticket from one
        of the Registration shops before (IDs are also in that endpoint)

        Then, if all of that succeeds, send the player who bought it a customizable message
        such as: "[L++] We've received your ticket!"

        See the config.yml for messages

        Also, the main thing:

        When a player makes a purchase from one of those shops, make sure
        you add it to the database, so I can retrieve it from the frontend
        at an API endpoint.

        Finally, because I don't want to have to pay for a server:

        At a configurable date/time each week, the drawing should happen.

     */
    @Override
    public void onEnable() {

        Objects.requireNonNull(this.getCommand("lpp")).setExecutor(new LotteryPlusPlusCommand(this));

        /*QuickShopAPI api = QuickShopAPI.getInstance();
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
        }*/
    }

    // Runs when a player purchases something from a shop
    public void onPurchase(ShopPurchaseEvent event) {
        /*if (!event.isCancelled()) {
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
        }*/
    }

    /*static class APIHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            // response needs to be JSON array of recent purchases

            String response = "This is the response";
            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }*/

    @Override
    public void onDisable() {
        // Plugin shutdown logic
    }
}
