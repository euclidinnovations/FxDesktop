package com.euclid.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.HashMap;
import java.util.Map;

public class StateManager {
	
	private Map<String, Map<String, Object>> stateData = new HashMap<String, Map<String,Object>>();
	private Map<String, Map<String, Object>> retstateData = new HashMap<String, Map<String,Object>>();
	public void saveData(String userid, String name, String value) {
	
		if(!stateData.containsKey(userid)) {
			stateData.put(userid, new HashMap<String, Object>());
		}
		stateData.get(userid).put(name, value);
		//after storing, serialize stateData to disk
		FileOutputStream fos;
	    try {
	        fos = new FileOutputStream("D://workspacesave.ser");

	    ObjectOutputStream oos = new ObjectOutputStream(fos);
	     oos.writeObject(stateData);
	     oos.close();
	    		} catch (FileNotFoundException e) {e.printStackTrace();
	    		} catch (IOException e) {e.printStackTrace();
	       }
		
		System.out.println("state data of grid is :"+stateData.get(userid));
	}
	
	public Map<String, Object> getUserData(String userId) {
		//desrialize stateData from disk and use
		try {
			FileInputStream fis = new FileInputStream("D://workspacesave.ser");
		     ObjectInputStream ois = new ObjectInputStream(fis);
		    retstateData = (Map<String, Map<String, Object>>) ois.readObject();
		    System.out.println("restate data of grid is +++:"+retstateData.get(userId));
		     ois.close();
	    		}  catch (ClassNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		return retstateData.get(userId);
	}
	
	public void clearData(String userId, String name) {
		try {
			FileInputStream fis = new FileInputStream("D://list.ser");
		     ObjectInputStream ois = new ObjectInputStream(fis);
		    retstateData = (Map<String, Map<String, Object>>) ois.readObject();

		     ois.close();
	    		}  catch (ClassNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		if(name != null) {
			retstateData.get(userId).remove(name);
		}
		else {
			retstateData.remove(userId);
		}
	}
	
	public static StateManager getInstance() {
		return StateManagerHolder.STATE_MANAGER;
	}
	
	private static class StateManagerHolder {
		private static final StateManager STATE_MANAGER = new StateManager();
	}
}
