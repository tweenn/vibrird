using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class game_canvas : MonoBehaviour
{
    private Text pointsText;

    private int pontuation = 0;

    void Awake()
    {
        pointsText = GameObject.Find("Points").GetComponent<Text>();
        Debug.Log(pointsText);
    }

    public void AddPoint()
    {
        pontuation++;
        pointsText.text = pontuation.ToString();
    }
}
