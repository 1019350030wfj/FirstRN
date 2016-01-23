package com.firstrn.testmoduletojs;

import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by Jayden on 2016/1/23.
 */
public class JaydenWebView extends SimpleViewManager {

    private static final String WEBVIEW = "JaydenWebview";

    @Override
    public String getName() {
        return WEBVIEW;
    }

    @Override
    protected View createViewInstance(ThemedReactContext reactContext) {
        WebView webView= new WebView(reactContext);
        webView.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }
        });
        return webView;
    }

    @ReactProp(name="url")
    public void setUrl(WebView view,String url) {
        view.loadUrl(url);
    }
}
