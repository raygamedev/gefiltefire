using System;

namespace Gefilte
{

    using UnityEngine;
    public class Rocket : MonoBehaviour
    {
        private Rigidbody2D _rigidbody;

        private void Awake()
        {
            _rigidbody = GetComponent<Rigidbody2D>();
        }

        public void Launch()
        {
            Debug.Log("Rocket launched!");
            // Implement the launch logic here
            // For now, we'll just add a force to the rigidbody
            _rigidbody.AddForce(transform.up * 1000f);
        }

        private void OnTriggerEnter2D(Collider2D other)
        {
            Debug.Log("Rocket hit something!");
        }
    }
}