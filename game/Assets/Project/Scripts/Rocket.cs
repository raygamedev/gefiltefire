using System;

namespace Gefilte
{

    using UnityEngine;
    public class Rocket : MonoBehaviour
    {
        [SerializeField] GameObject explosionPrefab;
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
            GameObject explosion = Instantiate(explosionPrefab, transform.position, Quaternion.identity);
            Destroy(explosion, 0.7f);
            Destroy(gameObject);
        }
    }
}