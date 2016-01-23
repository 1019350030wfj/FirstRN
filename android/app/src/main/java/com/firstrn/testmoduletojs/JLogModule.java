package com.firstrn.testmoduletojs;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.common.MapBuilder;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by Jayden on 2016/1/23.
 */
public class JLogModule extends ReactContextBaseJavaModule {

    private static final String NATIVE_MODULE_NAME_TO_JS = "JLog";
    public static final String KEY_SHORT = "SHORT";
    public static final String KEY_LONG = "LONG";

    public JLogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String,Object> map = MapBuilder.newHashMap();
        map.put(KEY_SHORT,"log show short");
        map.put(KEY_LONG,"log show long");
        return map;
    }

    @Override
    public String getName() {
        return NATIVE_MODULE_NAME_TO_JS;
    }

    //这个方法是给js调用的
    @ReactMethod
    public void log(String tag,String msg,Callback callback) {
        Log.d(tag,msg);
        callback.invoke("NativeModule callbakc to Js");
    }
}
