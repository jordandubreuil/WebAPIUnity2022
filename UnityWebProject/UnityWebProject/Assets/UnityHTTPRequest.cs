using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using System.Text;
using TMPro;
using UnityEngine.UI;
//using UnityEngine.UIElements;

public class UnityHTTPRequest : MonoBehaviour
{
    public string nameData;
    public TMP_InputField nameInput;
    public TMP_InputField scoreInput;
    public TMP_InputField healthInput;
    [SerializeField]
    public Toggle deadInput;

    
    string postData;

    
    public class MyData { 
        public string myName;
        public int myScore;
        public float myHealth;
        public bool isDead;

    } 

    // Start is called before the first frame update
    void Start()
    {
        
        MyData myData = new MyData();
        myData.myName = "Logan";
        postData = JsonUtility.ToJson(myData);
        
        Debug.Log(postData);
        StartCoroutine(MakeWebRequest());
    }

    IEnumerator MakeWebRequest()
    {
       // WWWForm myForm = new WWWForm();
        //myForm.AddField("name", "Logan");
        //GET Request Example
        var getRequest = new UnityWebRequest($"http://localhost:3000/unity?name={nameData}");
        yield return getRequest.SendWebRequest();

        //creating a variable that stores the post request
        //byte[] bodyData = Encoding.UTF8.GetBytes(postData);
        //UnityWebRequest postRequest = UnityWebRequest.Post("http://localhost:3000/unityPost", bodyData.ToString());
       // postRequest.uploadHandler = new UploadHandlerRaw(bodyData);
       // postRequest.SetRequestHeader("Content-Type", "application/json");
        
        //yield return postRequest.SendWebRequest();
    }

    IEnumerator PostRequest(string sendData) {
        var request = new UnityWebRequest("http://localhost:3000/unityPost", "POST");
        byte[] bodyData = Encoding.UTF8.GetBytes(sendData);
        request.uploadHandler = new UploadHandlerRaw(bodyData);
        request.downloadHandler = new DownloadHandlerBuffer();
        request.SetRequestHeader("Content-Type", "application/json");
        yield return request.SendWebRequest();

    }

    public void SendData() {
        MyData sendData = new MyData();
        sendData.myName = nameInput.text;
        sendData.myScore = int.Parse(scoreInput.text);
        sendData.myHealth = float.Parse(healthInput.text);
        sendData.isDead = deadInput.isOn;
        var postData = JsonUtility.ToJson(sendData);
        Debug.Log(postData);
        StartCoroutine(PostRequest(postData)); 
    
    }
}
