package com.nequiexpensetracker

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.telephony.SmsMessage
import android.util.Log
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat

class SmsReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val bundle = intent.extras
        if (bundle != null) {
            val pdus = bundle.get("pdus") as Array<*>
            for (pdu in pdus) {
                val message = SmsMessage.createFromPdu(pdu as ByteArray)
                val sender = message.displayOriginatingAddress
                val messageBody = message.messageBody

                if (sender == "890886") {
                    Log.d("SmsReceiver", "Received SMS from Nequi: $messageBody")
                    sendNotification(context, messageBody)
                }
            }
        }
    }

    private fun sendNotification(context: Context, messageBody: String) {
        val notificationId = 1
        val builder = NotificationCompat.Builder(context, "nequi_channel")
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle("Nuevo mensaje de Nequi")
            .setContentText(messageBody)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)

        with(NotificationManagerCompat.from(context)) {
            notify(notificationId, builder.build())
        }
    }
}