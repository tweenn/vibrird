using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class vibrird : MonoBehaviour
{
    private float awakeTimeTotal = 1f;
    private float awakeTimeCurrent = 0f;
    private bool isBirdRigidBodyAwaken = false;

    public float forceUp = 2f;

    private Rigidbody2D birdRigidBody;

    private float birdPositionX = 0f;

    private GameObject Canvas;

    void Awake()
    {
        birdRigidBody = this.gameObject.GetComponent<Rigidbody2D>();
        birdPositionX = this.transform.position.x;

        Canvas = GameObject.Find("UI/Canvas");
        Debug.Log(Canvas);
    }
    void Update()
    {
        if (isBirdRigidBodyAwaken)
        {
            IsOffScreen();
            HasUserInput();
        }
    }

    void FixedUpdate()
    {
        if (!isBirdRigidBodyAwaken)
        {
            AwakeBirdRigidBodyChecker();
        }
    }

    void OnTriggerEnter2D(Collider2D collider)
    {
        if ((collider.gameObject.tag == "Pipe") || (collider.gameObject.tag == "Pit"))
        {
            Debug.Log("GAMEOVER");
        }

        if (collider.gameObject.tag == "Score")
        {
            Canvas.SendMessage("AddPoint", "", SendMessageOptions.DontRequireReceiver);
        }
    }


    private void AwakeBirdRigidBodyChecker()
    {
        awakeTimeCurrent += 1 * Time.deltaTime;

        if (awakeTimeCurrent >= awakeTimeTotal)
        {
            isBirdRigidBodyAwaken = true;
            AwakeBirdRigidBody();
        }
    }

    private void AwakeBirdRigidBody()
    {
        birdRigidBody.WakeUp();
    }

    private void IsOffScreen()
    {
        if (this.transform.position.y >= 4f)
        {
            this.transform.position = new Vector3(birdPositionX, 4f, 0f);
        }
    }

    private void HasUserInput()
    {
        if (Input.GetButtonUp("Fire1"))
        {
            birdRigidBody.AddForce(transform.up * forceUp, ForceMode2D.Impulse);
            if (birdRigidBody.velocity.y > 5f)
            {
                birdRigidBody.velocity = new Vector2(birdRigidBody.velocity.x, 2.5f);
            }
        }
    }
}
